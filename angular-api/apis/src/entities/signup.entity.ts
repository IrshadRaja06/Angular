import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Signup")
export class signupEntity{
    static password(password: string, password1: any) {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: String;

    @Column()
    email: String;

    @Column()
    password: String;
}