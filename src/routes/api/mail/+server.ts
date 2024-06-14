import { POSTMARK_KEY, POSTMARK_MAIL, RESEND, SENDGRID_FROM_EMAIL, SENDGRID_KEY, SHOOTMAIL_API, ZOHO } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Shootmail, type ShootMailConfig } from "shootmail";

const config: ShootMailConfig = {
    shootmailApiKey: SHOOTMAIL_API,
    providers: [
        {
            "provider": "zoho",
            "apiKey": ZOHO
        },
        {
            "provider": "resend",
            "apiKey": RESEND
        },
        {
            "provider": "sendgrid",
            "apiKey": SENDGRID_KEY
        },
        {
            "provider": "postmark",
            "apiKey": POSTMARK_KEY
        }
    ],
    brand: {
        color: "#ff3e00",
        logo: {
            default: "https://res.cloudinary.com/curead/image/upload/c_scale,f_auto,q_auto,w_343/v1712843877/Shootmail/logos/shootm-logo-with-name_jgdq2l.png"
        }
    }
}

const shootmail = new Shootmail(config);

export const POST: RequestHandler = async () => {
    const response = await shootmail.shoot({
        from: { name: "Subhendu", email: POSTMARK_MAIL },
        provider: "postmark",
        subject: "Shootmail SDK Test - Sendgrid",
        templateId: "jljowhfehdrgkrc",
        to: [
            {
                email: POSTMARK_MAIL
            }
        ],
        variables: [
            {
                type: "preHeader",
                text: "Your OTP signing up on Shootmail",
            },
            {
                type: "heading",
                text: "Your one time password!",
                align: "center",
                level: "2",
            },
            {
                type: "text",
                text: "Your OTP signing up on Shootmail",
                align: "center",
            },
            {
                type: "otp",
                otp: "007007",
                displayBoxes: true,
                align: "center",
            },
            {
                type: "paragraphs",
                text: [
                    "This OTP is valid for 5 minutes. Please do not share this OTP with anyone.",
                ],
                align: "center",
            },
        ],
    });

    return json(response);
};