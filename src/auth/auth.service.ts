// import { CreateUserDTO } from './../users/dto/create-user.dto';
// import { UserEntity } from './../users/entities/user.entity';
// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { from, Observable } from 'rxjs';
// const brcypt = require('bcrypt');

// @Injectable()
// export class AuthService {
//     constructor(private readonly jwtService:JwtService){}

//     generateJWT(user: CreateUserDTO): Observable <string>{
//         return from(this.jwtService.signAsync({user}));
//     }

//     hashPassword(password: string): Observable<string>{
//         return from<string>(brcypt.hash(password));
//     }

//     comparePassword(): Observable<any>{
//         return;
//     }
// }
