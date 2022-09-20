import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateStudentDto } from "./create-student.dto";
import { Student } from "./student.entity";

@Injectable()
export class StudentService {

    constructor(@InjectRepository(Student) private readonly userRepository: Repository<Student>) {}

    findAll() {
        return this.userRepository.find();
    }

    findOne(id: any) {
        return this.userRepository.findOneOrFail(id);
    }

    create(data: CreateStudentDto) {
        const user = new Student();
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.isActive = data.isActive;

        return this.userRepository.save(user);
    }

    update(data: CreateStudentDto, id: number) {
        return this.userRepository.save({...data, id: Number(id)})
    }

    delete(id: number) {
        return this.userRepository.delete(id)
    }

}