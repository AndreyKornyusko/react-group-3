const value: number = 5;

const name: string = 'Mango';

const isActive: boolean = true;

const abc: null = null;

const cba: void = undefined;

const add = (a: number, b: number): number => a + b;

const value1: number = add(3, 5);

const numbers: Array<number> = [1, 2, 3, 4, 5];

type Address = { id: number, location: string };

type User = { id: number, name: string, age: number, address: Address };

const mango: User = {
    id: 1,
    name: 'Mango',
    age: 5,
    address: { id: 1, location: 'qweqe' },
};

const users: Array<User> = [
    { id: 1, name: 'Mango', age: 5, address: { id: 1, location: 'qweqe' } },
    { id: 2, name: 'Poly', age: 6, address: { id: 1, location: 'qweqe' } },
];
