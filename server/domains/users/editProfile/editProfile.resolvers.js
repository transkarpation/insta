import bcrypt from "bcrypt";
import client from "../../../client";
import { decode } from "../../../utils/jwt";

export default {
  Mutation: {
    editProfile: async (
      _,
      { firstName, lastName, username, email, password: newPassword },
      { user }
    ) => {

      if (user) {
        console.log('edit profile user = ', user)
        let uglyPass = null;
        if (newPassword) {
          uglyPass = await bcrypt.hash(newPassword, 10);
        }

        const updatedUser = await client.user.update({
          where: {
            id: user.id,
          },
          data: {
            firstName,
            lastName,
            username,
            email,
            ...(uglyPass && { password: uglyPass }),
          },
        });

        if (updatedUser.id) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
          };
        }
      } else {
          return {
              ok: false,
              error: "Bad creds"
          }
      }
    },
  },
};
