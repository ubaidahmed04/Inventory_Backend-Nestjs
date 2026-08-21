import { BadRequestException, Injectable, NotFoundException, Param } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { updateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }
    async createUser(registerUserDto: RegisterDto) {
        return this.prisma.user.create({
            data: registerUserDto
        })
    }
    async findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: { email }
        })
    }
    async findAllUsers() {
        const users = await this.prisma.user.findMany({
            select: {
                id: true,
                fname: true,
                lname: true,
                email: true,
                // password nahi likha, isliye wo query se hi exclude ho jayega
            }
        });
        // console.log(users)
        return {
            message: "Users Fetched Successfully",
            status: true,
            data: users
        }
    }
    async findUserById(id: number) {
        let data = await this.prisma.user.findUnique({
            select: {
                fname: true,
                lname: true,
                email: true
            }, where: { id }
        })
        if (!data) {
            throw new BadRequestException('User Not Found')
        }
        return {
            message: "User Find Successfully",
            status: true,
            data
        }
    }
    async updateUser(id: number, data: updateUserDto) {
        let existingUser = await this.prisma.user.findUnique({
            where: { id }
        })
        if (!existingUser) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        let users = await this.prisma.user.update({
            select: {
                fname: true,
                lname: true,
                email: true
            }, where: { id }, data
        })
        return {
            message: "User Updated Successfully",
            status: true,
            users
        }
    }

    // deleteUser
    async deleteUser(id: number) {
        let existingUser = await this.prisma.user.findUnique({
            where: { id }
        })
        if (!existingUser) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        let deletedUser =await this.prisma.user.delete({
            where: { id },
            select: {              // password expose na ho response mein
            id: true,
            fname: true,
            lname: true,
            email: true,
        }
        })
        return {
            message: "User deleted Successfully",
            status: true,
            deletedUser
        }
    }
}
