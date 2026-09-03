import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { LoginDto } from './dto/loginUser.dto';
import { Public } from 'src/public.decorator';

@Controller('auth')  // /auth/register
export class AuthController {
    constructor(private readonly authService : AuthService){}
    @Public()
    @Post("register")
    async register(@Body() registerUserDto : RegisterDto){
        const result = await this.authService.registerUser(registerUserDto)
        return result
    }

    @Public()
    @Post("login")
    async login(@Body() loginUserDto : LoginDto) {
        const result =await this.authService.loginUser(loginUserDto)
        return result
    }
}
