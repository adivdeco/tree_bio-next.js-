// "use client";

// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { useUser } from "@clerk/nextjs";
// import { useState } from "react";
// import {
//   Plus,
//   Instagram,
//   Youtube,
//   Mail,
//   Archive,
//   FolderPlus,
//   Camera,
//   Edit3,
//   X,

// } from "lucide-react";
// import { Link } from "@prisma/client";
// import { LinkCard, LinkFormWithPreview } from "./link-card";
// import { createLinkByUser } from "../action";


// const linkSchema = z.object({
//   title: z
//     .string()
//     .min(1, "Title is required")
//     .max(100, "Title must be less than 100 characters"),
//   url: z
//     .string()
//     .url("Please enter a valid URL")
//     .min(1, "URL is required"),
//   description: z
//     .string()
//     .max(200, "Description must be less than 200 characters")
//     .optional(),
// })

// const profileSchema = z.object({
//   firstName: z
//     .string()
//     .min(1, "First name is required")
//     .max(50, "First name must be less than 50 characters"),
//   lastName: z
//     .string()
//     .max(50, "Last name must be less than 50 characters")
//     .optional(),
//   username: z
//     .string()
//     .min(3, "Username must be at least 3 characters")
//     .max(30, "Username must be less than 30 characters")
//     .regex(
//       /^[a-zA-Z0-9_]+$/,
//       "Username can only contain letters, numbers, and underscores"
//     ),
//   bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
//   imageUrl: z.string().url("Please enter a valid image URL").optional(),
// });

// export type ProfileFormData = z.infer<typeof profileSchema>
// export type LinkFormData = z.infer<typeof linkSchema>

// interface Props {
//   username: string;
//   bio: string,
//   link: {
//     id: string;
//     title: string;
//     description: string;
//     url: string;
//     clickCount: number;
//     createdAt: Date;
//   }[];
// }
// interface Profile {
//   firstName: string;
//   lastName: string;
//   username: string;
//   bio?: string;
//   imageUrl?: string;
// }

// const LinkForm = ({ username, bio, link }: Props) => {
//   const currentUser = useUser();
//   const [profile, setProfile] = useState<Profile>({
//     firstName: currentUser.user?.firstName || "",
//     lastName: currentUser.user?.lastName || "",
//     username: username || "",
//     bio: bio || "",
//     imageUrl: currentUser.user?.imageUrl ||
//       `https://api.dicebear.com/9.x/adventurer/svg?seed=[${currentUser.user?.firstName}+${currentUser.user?.lastName}]`,
//   })
//   const [editingProfile, setEditingProfile] = useState(false);
//   const [isAddingLink, setIsAddingLink] = useState(false);
//   const [links, setLinks] = useState<Link[]>(link || []);
//   const [editingLinkId, setEditingLinkId] = React.useState<string | null>(null);

//   // Profile form
//   const profileForm = useForm<ProfileFormData>({
//     resolver: zodResolver(profileSchema),
//     defaultValues: {
//       firstName: profile.firstName || "",
//       lastName: profile.lastName || "",
//       username: profile.username,
//       bio: profile.bio || "",
//     },
//   });

//   // Link form
//   const linkForm = useForm<LinkFormData>({
//     resolver: zodResolver(linkSchema),
//     defaultValues: {
//       title: "",
//       url: "",
//       description: "",
//     },
//   });

//   // Profile submit handler
//   const onProfileSubmit = async (data: ProfileFormData) => {
//     // try {
//     //   setProfile((prev) => ({ ...prev, ...data }));

//     //   const updatedProfile = await createUserProfile(data);

//     //   console.log("Updated Profile:", updatedProfile);
//     //   toast.success("Profile updated successfully!");
//     // } catch (error) {
//     //   console.error("Error updating profile:", error);
//     //   toast.error("Failed to update profile.");
//     // } finally {
//     //   profileForm.reset();
//     //   setEditingProfile(false);
//     // }
//   };

//   // Link submit handler
//   const onLinkSubmit = async (data: LinkFormData) => {
//     try {
//       const link = await createLinkByUser(data);
//       console.log("Created Link:", link);

//       if (link?.data?.id) {
//         setLinks((prev) => [
//           ...prev,
//           { id: link.data.id, ...data, clickCount: 0 },
//         ]);
//       }
//       toast.success("Link created successfully!");
//     } catch (error) {
//       console.error("Something Went wrong", error);
//       toast.error("Failed to create link.");
//     } finally {
//       linkForm.reset();
//       setIsAddingLink(false);
//     }
//   };

//   const handleEditLink = (LinkId: string) => {
//     setEditingLinkId(LinkId);
//     setIsAddingLink(true)
//   }
//   const handleDeleteLink = async (linkId: string) => {
//     try {
//       // Delete the link
//       const deletedLink = await deleteLink(linkId);
//       console.log("Deleted Link:", deletedLink);
//       setLinks((prev) => prev.filter((link) => link.id !== linkId));
//       toast.success("Link deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting link:", error);
//       toast.error("Failed to delete link.");
//     }
//   }

//   const onEditLinkSubmit = async (data: LinkFormData) => { }

//   return (
//     <div className="w-full max-w-2xl mx-auto space-y-6">
//       {/* Profile Section */}
//       <Card className="border-2 border-dashed border-gray-200 hover:border-green-400 transition-colors">
//         <CardContent className="p-6">
//           <div className="flex items-center gap-4">
//             <div className="relative group">
//               <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
//                 <AvatarImage
//                   src={profile.imageUrl || "/placeholder.svg"}
//                   alt={profile.username}
//                 />
//                 <AvatarFallback className="text-lg font-semibold bg-gray-100 text-gray-600">
//                   {profile?.username.slice(0, 2).toUpperCase() || "UN"}
//                 </AvatarFallback>
//               </Avatar>
//               <Button
//                 size="sm"
//                 variant="secondary"
//                 className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 <Camera size={14} />
//               </Button>
//             </div>

//             <div className="flex-1 space-y-2">
//               {editingProfile ? (
//                 <form
//                   onSubmit={profileForm.handleSubmit(onProfileSubmit)}
//                   className="space-y-2"
//                 >
//                   <div className="flex gap-2">
//                     <Input
//                       {...profileForm.register("firstName")}
//                       placeholder="First Name"
//                     />
//                     <Input
//                       {...profileForm.register("lastName")}
//                       placeholder="Last Name"
//                     />
//                   </div>
//                   <div>
//                     <Input
//                       {...profileForm.register("username")}
//                       placeholder="Username"
//                       className="font-semibold cursor-not-allowed"
//                       readOnly
//                       disabled
//                     />
//                     {profileForm.formState.errors.username && (
//                       <p className="text-sm text-red-500 mt-1">
//                         {profileForm.formState.errors.username.message}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <Textarea
//                       {...profileForm.register("bio")}
//                       placeholder="Add bio..."
//                       className="resize-none"
//                       rows={2}
//                     />
//                     {profileForm.formState.errors.bio && (
//                       <p className="text-sm text-red-500 mt-1">
//                         {profileForm.formState.errors.bio.message}
//                       </p>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button
//                       size="sm"
//                       type="submit"
//                       disabled={profileForm.formState.isSubmitting}
//                     >
//                       Save
//                     </Button>
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       type="button"
//                       onClick={() => setEditingProfile(false)}
//                     >
//                       Cancel
//                     </Button>
//                   </div>
//                 </form>

//               ) : (
//                 <div className="space-y-1">
//                   <div className="flex items-center gap-2">
//                     <h3 className="font-semibold text-lg">
//                       {profile.username || "Add username..."}
//                     </h3>
//                     <Button
//                       size="sm"
//                       variant="ghost"
//                       className="h-6 w-6 p-0"
//                       onClick={() => setEditingProfile(true)}
//                     >
//                       <Edit3 size={12} />
//                     </Button>
//                   </div>
//                   <p className="text-sm text-muted-foreground">
//                     {profile.bio || "Add bio..."}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Social Links */}

//         </CardContent>
//       </Card>

//       {/* Links Section */}
//       <div className="space-y-3">
//         {links.map((link, index) => (
//           <LinkCard
//             key={link.id}
//             link={link}
//             onDelete={handleDeleteLink}
//             onEdit={handleEditLink}
//           />
//         ))}

//         {/* Add New Link */}
//         {isAddingLink ? (
//           <LinkFormWithPreview
//             onCancel={() => {
//               setIsAddingLink(false);
//               setEditingLinkId(null);
//             }}
//             onSubmit={editingLinkId ? onEditLinkSubmit : onLinkSubmit}
//             defaultValues={
//               editingLinkId
//                 ? links.find((l) => l.id === editingLinkId) || {
//                   title: "",
//                   url: "",
//                   description: "",
//                 }
//                 : { title: "", url: "", description: "" }
//             }
//           />
//         ) : (
//           <Button
//             onClick={() => setIsAddingLink(true)}
//             className="w-full h-12 border-2 border-dashed border-gray-300 bg-white hover:bg-gray-50 dark:text-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
//             variant="outline"
//           >
//             <Plus size={20} className="mr-2" />
//             Add Link
//           </Button>
//         )}
//       </div>

//       {/* Bottom Actions */}
//       <div className="flex items-center justify-between pt-4 border-t">
//         <Button
//           variant="outline"
//           onClick={() => toast.success("Feature coming soon!")}
//           className="flex items-center gap-2 bg-transparent cursor-pointer"
//         >
//           <FolderPlus size={16} />
//           Add Collection
//         </Button>

//         <Button
//           variant="outline"
//           className="flex items-center gap-2 bg-transparent cursor-pointer"
//           onClick={() => toast.success("Feature coming soon!")}
//         >
//           <Archive size={16} />
//           View Archive
//         </Button>
//       </div>

//       {/* Social Link Modal */}
//       {/* <SocialLinkModal
//         isOpen={isSocialModalOpen}
//         onClose={() => setIsSocialModalOpen(false)}
//         onSubmit={onSocialLinkSubmit}
//         defaultValues={editingSocialLink ? {
//           platform: editingSocialLink.platform,
//           url: editingSocialLink.url
//         } : undefined}
//       /> */}
//     </div>
//   )
// }

// export default LinkForm;






"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {
  Plus,
  Instagram,
  Youtube,
  Mail,
  Archive,
  FolderPlus,
  Camera,
  Edit3,
  X,
  Link2,
  Globe,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link } from "@prisma/client";
import { LinkCard, LinkFormWithPreview } from "./link-card";
import { createLinkByUser } from "../action";

const linkSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  url: z.string().url("Please enter a valid URL").min(1, "URL is required"),
  description: z
    .string()
    .max(200, "Description must be less than 200 characters")
    .optional(),
});

const profileSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .max(50, "Last name must be less than 50 characters")
    .optional(),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  imageUrl: z.string().url("Please enter a valid image URL").optional(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
export type LinkFormData = z.infer<typeof linkSchema>;

interface Props {
  username: string;
  bio: string;
  links: {
    id: string;
    title: string;
    description: string | null;
    url: string;
    clickCount: number;
    createdAt: Date;
  }[];
}

interface Profile {
  firstName: string;
  lastName: string;
  username: string;
  bio?: string;
  imageUrl?: string;
}

const LinkForm = ({ username, bio, links: initialLinks }: Props) => {
  const { user } = useUser();
  const [profile, setProfile] = useState<Profile>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    username: username || "",
    bio: bio || "",
    imageUrl:
      user?.imageUrl ||
      `https://api.dicebear.com/9.x/adventurer/svg?seed=${user?.firstName}+${user?.lastName}`,
  });
  const [editingProfile, setEditingProfile] = useState(false);
  const [isAddingLink, setIsAddingLink] = useState(false);
  const [links, setLinks] = useState(initialLinks || []);
  const [editingLinkId, setEditingLinkId] = useState<string | null>(null);

  // Profile form
  const profileForm = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: profile.firstName,
      lastName: profile.lastName,
      username: profile.username,
      bio: profile.bio,
    },
  });

  // Update form defaults when profile changes
  useEffect(() => {
    profileForm.reset({
      firstName: profile.firstName,
      lastName: profile.lastName,
      username: profile.username,
      bio: profile.bio,
    });
  }, [profile, profileForm]);

  // Link form
  const linkForm = useForm<LinkFormData>({
    resolver: zodResolver(linkSchema),
    defaultValues: {
      title: "",
      url: "",
      description: "",
    },
  });

  // Profile submit handler
  const onProfileSubmit = async (data: ProfileFormData) => {
    try {
      setProfile((prev) => ({ ...prev, ...data }));
      // const updatedProfile = await createUserProfile(data);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    } finally {
      setEditingProfile(false);
    }
  };

  // Link submit handler
  const onLinkSubmit = async (data: LinkFormData) => {
    try {
      const result = await createLinkByUser(data);
      if (result?.data?.id) {
        setLinks((prev) => [
          ...prev,
          {
            id: result.data.id,
            ...data,
            description: data.description || null,
            clickCount: 0,
            createdAt: new Date()
          },
        ]);
        toast.success("Link created successfully!");
      }
    } catch (error) {
      console.error("Something went wrong", error);
      toast.error("Failed to create link.");
    } finally {
      linkForm.reset();
      setIsAddingLink(false);
    }
  };

  // Edit link submit handler
  const onEditLinkSubmit = async (data: LinkFormData) => {
    // if (!editingLinkId) return;

    // try {
    //   const result = await updateLink(editingLinkId, data);
    //   if (result?.data) {
    //     setLinks((prev) =>
    //       prev.map((link) =>
    //         link.id === editingLinkId
    //           ? { ...link, ...data, description: data.description || null }
    //           : link
    //       )
    //     );
    //     toast.success("Link updated successfully!");
    //   }
    // } catch (error) {
    //   console.error("Error updating link:", error);
    //   toast.error("Failed to update link.");
    // } finally {
    //   setEditingLinkId(null);
    //   setIsAddingLink(false);
    // }
  };

  const handleEditLink = (linkId: string) => {
    const linkToEdit = links.find((link) => link.id === linkId);
    if (linkToEdit) {
      linkForm.reset({
        title: linkToEdit.title,
        url: linkToEdit.url,
        description: linkToEdit.description || "",
      });
      setEditingLinkId(linkId);
      setIsAddingLink(true);
    }
  };

  const handleDeleteLink = async (linkId: string) => {
    // try {
    //   await deleteLink(linkId);
    //   setLinks((prev) => prev.filter((link) => link.id !== linkId));
    //   toast.success("Link deleted successfully!");
    // } catch (error) {
    //   console.error("Error deleting link:", error);
    //   toast.error("Failed to delete link.");
    // }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 p-4">
      {/* Profile Section */}
      <Card className="border-2 border-dashed border-gray-200 hover:border-green-400 transition-colors duration-300 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Avatar className="h-20 w-20 border-4 border-white shadow-lg ring-2 ring-gray-100">
                <AvatarImage
                  src={profile.imageUrl || "/placeholder.svg"}
                  alt={profile.username}
                  className="object-cover"
                />
                <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-green-100 to-blue-100 text-gray-700">
                  {profile.firstName?.[0]}
                  {profile.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                variant="secondary"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
                onClick={() => toast.info("Avatar upload coming soon!")}
              >
                <Camera size={14} />
              </Button>
            </div>

            <div className="flex-1 space-y-3">
              {editingProfile ? (
                <form
                  onSubmit={profileForm.handleSubmit(onProfileSubmit)}
                  className="space-y-3"
                >
                  <div className="flex gap-2">
                    <div className="flex-1 space-y-1">
                      <Input
                        {...profileForm.register("firstName")}
                        placeholder="First Name"
                        className="h-10"
                      />
                      {profileForm.formState.errors.firstName && (
                        <p className="text-xs text-red-500">
                          {profileForm.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <Input
                        {...profileForm.register("lastName")}
                        placeholder="Last Name"
                        className="h-10"
                      />
                      {profileForm.formState.errors.lastName && (
                        <p className="text-xs text-red-500">
                          {profileForm.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Input
                      {...profileForm.register("username")}
                      placeholder="Username"
                      className="font-semibold h-10"
                      readOnly
                      disabled
                    />
                    {profileForm.formState.errors.username && (
                      <p className="text-xs text-red-500">
                        {profileForm.formState.errors.username.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <Textarea
                      {...profileForm.register("bio")}
                      placeholder="Tell everyone about yourself..."
                      className="resize-none min-h-[80px]"
                    />
                    {profileForm.formState.errors.bio && (
                      <p className="text-xs text-red-500">
                        {profileForm.formState.errors.bio.message}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      type="submit"
                      disabled={profileForm.formState.isSubmitting}
                      className="flex-1"
                    >
                      {profileForm.formState.isSubmitting ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      type="button"
                      onClick={() => setEditingProfile(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-xl text-gray-800">
                      {profile.firstName} {profile.lastName}
                    </h3>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 w-7 p-0 rounded-full"
                      onClick={() => setEditingProfile(true)}
                    >
                      <Edit3 size={14} />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">@{profile.username}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {profile.bio || "No bio yet. Add one to tell your story!"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Social Links Preview */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0">
                <Globe size={16} />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0">
                <Github size={16} />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0">
                <Twitter size={16} />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0">
                <Linkedin size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full h-8"
                onClick={() => toast.info("Social links feature coming soon!")}
              >
                <Plus size={14} className="mr-1" />
                Add Social
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Links Section */}
      <div className="space-y-4">
        {links.map((link) => (
          <LinkCard
            key={link.id}
            link={link}
            onDelete={handleDeleteLink}
            onEdit={handleEditLink}
          />
        ))}

        {/* Add New Link */}
        {isAddingLink ? (
          <LinkFormWithPreview
            onCancel={() => {
              setIsAddingLink(false);
              setEditingLinkId(null);
              linkForm.reset();
            }}
            onSubmit={editingLinkId ? onEditLinkSubmit : onLinkSubmit}
            isEditing={!!editingLinkId}
            form={linkForm}
          />
        ) : (
          <Button
            onClick={() => setIsAddingLink(true)}
            className="w-full h-14 border-2 border-dashed border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-xl transition-all duration-300 hover:border-green-400 hover:shadow-md group"
            variant="outline"
          >
            <Plus size={20} className="mr-2 group-hover:text-green-600 transition-colors" />
            Add New Link
          </Button>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <Button
          variant="outline"
          onClick={() => toast.info("Collections feature coming soon!")}
          className="flex items-center gap-2 bg-transparent hover:bg-gray-50 transition-colors"
        >
          <FolderPlus size={16} />
          Add Collection
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2 bg-transparent hover:bg-gray-50 transition-colors"
          onClick={() => toast.info("Archive feature coming soon!")}
        >
          <Archive size={16} />
          View Archive
        </Button>
      </div>
    </div>
  );
};

export default LinkForm;