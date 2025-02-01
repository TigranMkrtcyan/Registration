export const Valid = () => {
    return (
        name.length > 0 &&
        lastname.length > 0 &&
        phone.length >= 9 &&
        email.includes('@') &&
        pas.length >= 8
    );
};