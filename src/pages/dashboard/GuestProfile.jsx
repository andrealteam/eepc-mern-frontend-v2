import React from "react";
import { useAuth } from "../../context/AuthContext"; // Import the custom AuthContext hook
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "./profile.css";
import { getGuestProfile } from "../../services/dashboardGuestApi";

// Helper function to add ordinal suffix to the day
const getOrdinalSuffix = (day) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const val = day % 100;
    return day + (suffixes[(val - 20) % 10] || suffixes[val] || suffixes[0]);
};

const GuestProfile = () => {
    const { user, loading, error } = useAuth();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }

    const user_id = user.user_id;
    const {
        data: guestProfileDatas,
        isLoading,
        isError,
        error: profileError,
    } = useQuery({
        queryKey: ["guestProfileDatas", user_id],
        queryFn: () => getGuestProfile(user_id),
        gcTime: 180000,
    });

    if (isError) return <p>Error: {profileError.message || "Something went wrong!"}</p>;

    // Extract data from the profile response
    const {
        result
    } = guestProfileDatas || {};
    if (!result) return (
            <>
                Loading...
                <div className="col-lg-12" style={{ marginTop: '2px' }}>
                    <Skeleton height={200} />
                </div>
                
    
    
            </>
    );
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    {isLoading ? (
                        <Skeleton height={200} />
                    ) : (
                        <div className="col-lg-9">
                            <div className="row profile-details">
                                <div className="col-lg-12">
                                    <ul>
                                        <li>Name : {result.guestInfo.Name}</li>
                                        <li>Email ID : {result.guestInfo.Email}</li>
                                        <li>Mobile No. : {result.guestInfo.Mobile_no}</li>
                                        <li>Designation : {result.guestInfo.Designation}</li>
                                        <li>Organization : {result.guestInfo.Organization}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
};

export default GuestProfile;
