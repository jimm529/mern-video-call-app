import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../modles/User.js";

export const inngest = new inngest({ id: "INTERVIEWX" });

const syncUser = inngest.createfuntion
    (
        { id: "sync-user" },
        { event: "clerk/user.created" },
        async ({ event }) => {

            await connectDB()



            const newUser = {

                clearkId: id,
                email: email_addresses[0]?.email_addresses,
                name: `${first_name || ""} ${last_name || ""}`,
                profileImage: image_url
            }
            const { id, email_addresses, first_name, last_name, image_url } = event.data

        }




    )

const deleteUSerFromDB = inngest.createfuntion
    (
        { id: "delete-user-from-db" },
        { event: "clerk/user.delete" },
        async ({ event }) => {
            await connectDB()
            const newUser = {

                clearkId: id,
                email: email_addresses[0]?.email_addresses,
                name: `${first_name || ""} ${last_name || ""}`,
                profileImage: image_url
            }
            const { id, email_addresses, first_name, last_name, image_url } = event.data
            await User.deleteOne({clerkId:id});

        }

    )



export const functions = { syncUser ,deleteUSerFromDB};