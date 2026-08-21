import { Body, Controller, Delete, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor (private readonly userService: UserService){}
    @Get()
    getUsers(){
        return this.userService.findAllUsers()
    }
    @Get(':id')
    findUserById(@Param('id') id : string ){
        return this.userService.findUserById(Number(id))
    }
    @Patch(':id')
    updateUser(
        @Param('id') id : string, 
        @Body() userUpdate : any){
        const result = this.userService.updateUser(Number(id) , userUpdate)
        return result
    }
    @Delete(':id')
    removeUser(@Param('id') id : string ){
        return this.userService.deleteUser(Number(id))
    }
}
