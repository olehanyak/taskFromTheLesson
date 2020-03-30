const user = {
    firstName: 'Tom',
    lastName: 'Ford',
    getFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
    setFullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
        return fullName;
    }
};
user.getFullName();
console.log(user.setFullName('Black Jack'));
user.setFullName();


export { user };