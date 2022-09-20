import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseFilters } from "@nestjs/common";
import { CreateTodoDto } from "./create-todo.dto";
import { EntityNotFoundExceptionFilter } from "./entity-not-found-excpetion.filter";
import { TodoService } from "./todo.service";

@Controller('todos')
@UseFilters(new EntityNotFoundExceptionFilter)
export class TodoController {

    constructor(private readonly todoService: TodoService) {}

    @Get()
    async findAall() {
        return {
            data: await this.todoService.findAll()
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return {
            data: await this.todoService.findOne(id)
        }
    }

    @Post()
    async create(@Body() data: CreateTodoDto) {
        return {
            data: await this.todoService.create(data)
        }
    }

    @Put(':id')
    async update(@Body() data: CreateTodoDto, @Param('id') id: number) {
        return {
            data: await this.todoService.update(data, id)
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return {
            data: await this.todoService.delete(id)
        }    
    }
}