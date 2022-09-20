import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./create-todo.dto";
import { Todo } from "./todo.entity";

@Injectable()
export class TodoService {

    constructor(@InjectRepository(Todo) private readonly userRepository: Repository<Todo>) {}

    findAll() {
        return this.userRepository.find();
    }

    findOne(id: any) {
        return this.userRepository.findOneOrFail(id);
    }

    create(data: CreateTodoDto) {
        const user = new Todo();
        user.task = data.task;
        user.checked = data.checked;

        return this.userRepository.save(user);
    }

    update(data: CreateTodoDto, id: number) {
        return this.userRepository.save({...data, id: Number(id)})
    }

    delete(id: number) {
        return this.userRepository.delete(id)
    }

}