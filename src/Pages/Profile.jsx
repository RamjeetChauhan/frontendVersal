import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const Profile = () => {
  // ✅ missing state added
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
  })

  // ✅ missing handler added
  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-xl px-4">
        <Tabs defaultValue="Profile" className="w-full ">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="Profile">Profile</TabsTrigger>
            <TabsTrigger value="Orders">Orders</TabsTrigger>
          </TabsList>

          {/* ACCOUNT TAB */}
          <TabsContent value="Profile">
           
          </TabsContent>

          {/* PASSWORD TAB */}
          <TabsContent value="Orders">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                  After changing password, you may need to login again.
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Current Password</Label>
                  <Input
                    name="currentPassword"
                    type="password"
                    placeholder="Current password"
                    value={profileData.currentPassword}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid gap-2">
                  <Label>New Password</Label>
                  <Input
                    name="newPassword"
                    type="password"
                    placeholder="New password"
                    value={profileData.newPassword}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-pink-500">
                  Update Password
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Profile

