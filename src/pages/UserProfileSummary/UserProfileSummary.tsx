import ProfileSkeleton from "@/components/profile/ProfileSkeleton";
import ProfileCard from "@/components/profile/ProfileCard";
import { useUserProfile } from "@/hooks/useUserProfile";

const UserProfileSummary = () => {
  const { data: userProfile, isLoading, isError } = useUserProfile();

  if (isLoading) return <ProfileSkeleton />;
  if (isError) return <div>Error loading profile</div>;
  
  return (
    <div className="py-8 bg-gradient-to-br  via-white  dark:from-gray-900 dark:via-gray-950 dark:to-black px-4 w-full">
      {userProfile && (
        <div className="w-full max-w-full mx-auto"> {/* تعديل هنا لجعل العرض كامل */}
          <ProfileCard userProfile={userProfile} />
        </div>
      )}
    </div>
  );
};

export default UserProfileSummary;