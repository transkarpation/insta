import client from "../../../client";

export default {
    Query: {
        seeProfile: (_, {username}) => client.user.findUnique({where: { username }}),
        seeProfiles: (_) => client.user.findMany({where: {}})
    }
}