"use client"

import AuthForm from '@/components/forms/AuthForm'
import { SignUpSchema } from '@/lib/validations'
import React from 'react'

export default function SignUp() {
  return <AuthForm
    formType="SIGN_UP"
    schema={SignUpSchema}
    defaultValues={{ email: "", password: "", name: "", username: "" }}
    onSubmit={(data) => Promise.resolve({
      success: true,
      data,
    })}
  />
}
