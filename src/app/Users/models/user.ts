export class User {
    userId: string = '';
    firstName: string = '';
    lastName: string = '';
    emailAddress: string = '';
    password: string = '';

    static toUser(object: any) : User {
        try {
            let newUser = new User();
            newUser.userId = object.userId;
            newUser.firstName = object.firstName;
            newUser.lastName = object.lastName;
            newUser.emailAddress = object.emailAddress;
            return newUser;
        } catch (error) {
            console.log(error);
        }
    }
}