import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseFilters } from "@nestjs/common";
import { CreateStudentDto } from "./create-student.dto";
import { EntityNotFoundExceptionFilter } from "./entity-not-found-excpetion.filter";
import { StudentService } from "./student.service";

@Controller('students')
@UseFilters(new EntityNotFoundExceptionFilter)
export class StudentController {

    constructor(private readonly studentService: StudentService) {}

    @Get()
    async findAall() {
        return {
            data: await this.studentService.findAll()
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return {
            data: await this.studentService.findOne(id)
        }
    }

    @Post()
    async create(@Body() data: CreateStudentDto) {
        return {
            data: await this.studentService.create(data)
        }
    }

    @Put(':id')
    async update(@Body() data: CreateStudentDto, @Param('id') id: number) {
        return {
            data: await this.studentService.update(data, id)
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number) {
        await this.studentService.delete(id);
    }
}