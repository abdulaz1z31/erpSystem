import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { MyBadRequiesError, MyInternalServerError } from 'src/errors/errors';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const newUser = await this.userModel.create(createUserDto);
    newUser.save();

    if (!newUser) {
      throw new MyInternalServerError('Error while creating user');
    }
    const user = newUser.toObject();
    delete user.password;
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new MyBadRequiesError('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const newUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    if (!newUser) {
      throw new MyBadRequiesError('User not found');
    }
    return newUser;
  }

  async remove(id: string): Promise<{ message: string; statusCode: number }> {
    await this.userModel.findByIdAndDelete(id);
    return {
      message: 'Deleted successfully',
      statusCode: 200,
    };
  }
}
