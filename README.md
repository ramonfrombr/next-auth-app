# NextJS Auth V5

This is an advanced authentication application for a NextJS project.

## Dependencies:

Auth.js: https://authjs.dev/
Middleware config: https://dub.sh/Apr6dvD
Resend: https://resend.com/
Node.js: https://nodejs.org/en
ShadcnUI: https://ui.shadcn.com/
Clerk: https://dub.sh/SdVFxFU

## Features:

🔐 Next-auth v5 (Auth.js)
🚀 Next.js 14 with server actions
🔑 Credentials Provider
🌐 OAuth Provider (Social login with Google & GitHub)
🔒 Forgot password functionality
✉️ Email verification
📱 Two factor verification (2FA)
👥 User roles (Admin & User)
🔓 Login component (Opens in redirect or modal)
📝 Register component
🤔 Forgot password component
✅ Verification component
⚠️ Error component
🔘 Login button
🚪 Logout button
🚧 Role Gate
🔍 Exploring next.js middleware
📈 Extending & Exploring next-auth session
🔄 Exploring next-auth callbacks
👤 useCurrentUser hook
🛂 useRole hook
🧑 currentUser utility
👮 currentRole utility
🖥️ Example with server component
💻 Example with client component
👑 Render content for admins using RoleGate component
🛡️ Protect API Routes for admins only
🔐 Protect Server Actions for admins only
📧 Change email with new verification in Settings page
🔑 Change password with old password confirmation in Settings page
🔔 Enable/disable two-factor auth in Settings page
🔄 Change user role in Settings page (for development purposes only)

## Useful Commands

`npx shadcn@latest add COMPONENT`

`npx prisma studio`

`npx auth secret`

`npx prisma db push`

### Bugs

- When incorrect 2FA code is inserted in the form input, the user is not allowed to login but subsequent tries do not work.
