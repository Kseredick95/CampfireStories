import userAPI from "../utils/APIuser";


export function storyPageHelpers() {

    //check completedBooks from user object to not make duplicated or add to user object
    function completedBooksCheck(choice, user) {
        if (
            choice.victory &&
            user.completedBooks.some((obj) => obj.title === choice.victory) === false
        ) {
            user.completedBooks.push({ title: choice.victory });
            let userData = user
            console.log(userData);
            userAPI
                .update(user._id, user)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
        }
    }

    //check achievements from user object to not make duplicates or add to user object
    function achievementsCheck(choice, user) {
        if (
            choice.achievement &&
            user.achievements.some((obj) => obj.name === choice.achievement.name) === false
        ) {
            user.achievements.push({
                name: choice.achievement.name,
                description: choice.achievement.description,
                type: choice.achievement.type,
                date: Date.now()
            });
            console.log(user);
            userAPI
                .update(user._id, user)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
        };
    }

    return {
        completedBooksCheck: completedBooksCheck,
        achievementsCheck: achievementsCheck
    }
}