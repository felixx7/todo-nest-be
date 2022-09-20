import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { Student } from './students/student.entity';
import { StudentController } from './students/student.controller';
import { StudentService } from './students/student.service';
import { Todo } from './todos/todo.entity';
import { TodoController } from './todos/todo.controller';
import { TodoService } from './todos/todo.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([User,Student,Todo])
  ],
  controllers: [AppController,UserController,StudentController,TodoController],
  providers: [AppService,UserService,StudentService,TodoService],
})
export class AppModule {}