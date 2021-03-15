import bcrypt from "bcrypt";
import client from '../../../client'

export default {
    Mutation: {
        editProfile: async (
            _,
            { firstName, lastName, username, email, password: newPassword }
        ) => {
            let uglyPass = null;
            if (newPassword) {
                uglyPass = await bcrypt.hash(newPassword, 10);
            }

            const updatedUser = await client.user.update({
                where: {
                    id: 1,
                },
                data: {
                    firstName,
                    lastName,
                    username,
                    email,
                    ...(uglyPass && { password: uglyPass }),
                },
            });

            if(updatedUser.id) {
                return {
                    ok: true,

                }
            } else {
                return {
                    ok: false,

                }
            }
        },
    },
};
