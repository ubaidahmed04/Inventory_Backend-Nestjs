import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import { LoginDto } from './dto/loginUser.dto';
import bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,

  ) { }

  async registerUser(registerUserDto: RegisterDto) {
    // console.log("register DTO ", registerUserDto)
    // 1. Check if user already exists
    const existingUser = await this.userService.findByEmail(
      registerUserDto.email
    )
    if (existingUser) {
      throw new BadRequestException('Email already exists')
    }
    // 2. Hash password
    const hashPass = await bcrypt.hash(registerUserDto.password, 10)
    console.log(hashPass)
    // 3. Save user in DB
    const user = await this.userService.createUser({
      ...registerUserDto,
      password: hashPass,
    })
    const token = this.generateToken(user.id, user.email);
    return {
      message: 'User registered successfully',
      status: true,
      user: {
        id: user.id,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
      },
      token
    }
  }

  // login user 
  async loginUser(loginUserDto: LoginDto) {
    console.log("login Dto", loginUserDto)
    const user = await this.userService.findByEmail(loginUserDto.email)

    if (!user) {
      throw new BadRequestException('Invalid email or password')
    }
    const isMatch = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    )
     if (!isMatch) {
      throw new BadRequestException('Invalid email or password')
    }
    const token = this.generateToken(user.id, user.email);
    return {
      message: 'Login successful',
      status: 200 , 
      user: {
        id: user.id,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
      },
      token
    }
  }
  private generateToken(id: number, email: string): string {
        return this.jwtService.sign({ sub: id, email });
    }
}
