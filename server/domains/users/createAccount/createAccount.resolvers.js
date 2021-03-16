import client from "../../../client";
import bcrypt from "bcrypt";
import {sign} from '../../../utils/jwt';

export default {
    Mutation: {
        createAccount: async (
            _,
            { firstName, lastName, username, email, password }
        ) => {
            try {
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            {
                                username,
                            },
                            {
                                email,
                            },
                        ],
                    },
                });

                if (existingUser) {
                    throw new Error("This username/email is already taken.");
                }

                const uglyPass = await bcrypt.hash(password, 10);

                const newUser = await client.user.create({
                    data: {
                        firstName,
                        lastName,
                        username,
                        email,
                        password: uglyPass,
                    },
                });

                const token = sign(newUser.id)

                return {
                    ok: true,
                    user: newUser,
                    token: token
                }
            } catch (e) {
                return e;
            }
        }
    },
};
