import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [
      {
        name: 'Tuan',
        age: 27,
        id: 1,
      },
    ];
  }

  @Post()
  createUser() {
    return {
      name: 'Thanh',
      age: 18,
      id: 3,
    };
  }
}
