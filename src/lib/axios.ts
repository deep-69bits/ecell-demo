import axios from "axios"

import { NEXT_PUBLIC_API_BASE_URL } from "@/utils/constants/env"

const instance = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default instance
