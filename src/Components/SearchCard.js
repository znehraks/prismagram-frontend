import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";

const Card = styled.div``;

const UserCard = ({userName, isFollowing, url}) => (
    <Card>
        <Avatar url={url} />
        <FatText text={userName} />
        <Button text={!isSelf && isFollowing ? "Unfollow" : "Follow"} />
    </Card>
);

UserCard.PropTypes = {
    userName: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    isSelf: PropTypes.bool.isRequired
};

export default UserCard;