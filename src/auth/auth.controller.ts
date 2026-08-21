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
    register(@Body() registerUserDto : RegisterDto){
        const result = this.authService.registerUser(registerUserDto)
        return result
    }

    @Public()
    @Post("login")
    login(@Body() loginUserDto : LoginDto) {
        const result = this.authService.loginUser(loginUserDto)
        return result
    }
}
