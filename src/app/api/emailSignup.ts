import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY
const HUBSPOT_PORTAL_ID = "62515" // Replace this
const HUBSPOT_FORM_GUID = "fcc69886-915b-4fef-b35f-27850ef461e1" // Replace this

type Response = {
  success: boolean
  email?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { email, pageUri } = req.body

  if (typeof email !== "string") {
    return res.status(400).json({ success: false })
  }

  try {
    const response = await axios({
      method: "POST",
      url: `https://api.hsforms.com/submissions/v3/integration/secure/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}\?hapikey\=${HUBSPOT_API_KEY}`,
      data: {
        fields: [{ name: "email", value: email }],
        context: { pageUri },
      },
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return res.status(500).json({ success: false })
  }

  res.status(200).json({ success: true, email })
}