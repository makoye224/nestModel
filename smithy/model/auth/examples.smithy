$version: "2.0"

namespace com.nest.rental

apply SignUp @examples([
    {
        title: "Tenant Signup"
        documentation: "Example of a new tenant registering"
        input: { email: "john.doe@example.com", password: "SecurePass123", firstName: "John", lastName: "Doe", phoneNumber: "+255712345678" }
        output: { userId: "usr_123456789", message: "Account created successfully. Please check your email to verify your account." }
    }
])

apply BecomeLandlord @examples([
    {
        title: "Landlord Application"
        documentation: "Example of tenant applying to become landlord"
        input: {
            userId: "usr_123456789"
            application: { businessName: "Dar Properties Ltd", businessLicense: "BL-2024-001234", taxId: "123456789012" }
        }
        output: { message: "Landlord application submitted successfully. You will be notified once reviewed.", applicationId: "app_987654321" }
    }
])

apply SignIn @examples([
    {
        title: "User Login"
        documentation: "Example of user authentication"
        input: { email: "john.doe@example.com", password: "SecurePass123" }
        output: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            user: {
                tenant: { userId: "usr_123456789", email: "john.doe@example.com", phoneNumber: "+255712345678", firstName: "John", lastName: "Doe", userType: "TENANT", isEmailVerified: true, accountStatus: "ACTIVE", createdAt: 1640995200, updatedAt: 1640995200 }
            }
        }
    }
])
