import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import TextareaAutoSize from "react-autosize-textarea";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment as CommentIcon } from "../Icons";

const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;

  margin-bottom: 25px;
  user-select: none;
  a{
    color: inherit;
  }
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
    position: relative;
    padding-top: 100%;
`;

const File = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src});
  background-size: auto;
  background-position: center;
  opacity: ${props => props.showing ? 1 : 0};
  transition: opacity .5s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutoSize)`
    border: none;
    width: 100%;
    resize: none;
    font-size: 14px;
    &:focus{
        outline: none;
    }
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

export default ({
  user: { userName, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  comments,
  selfComments,
  caption
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <Link to={`/${userName}`}>
          <FatText text={userName} />
        </Link>
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files && files.map((file, index) => <File key={file.id} id={file.id} src={file.url} showing={index === currentItem} />)}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
        {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button>
          <CommentIcon />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 likes" : `${likeCount} likes`} />
        {comments && (
            <Comments>
            {comments.map(comment => (
                <Comment key={comment.id}>
                <FatText text={comment.user.userName} />
                {comment.text}
                </Comment>
            ))}
            {selfComments.map(comment => (
                <Comment key={comment.id}>
                <FatText text={comment.user.userName} />
                {comment.text}
                </Comment>
            ))}
            </Comments>
        )}
      <Timestamp>{createdAt}</Timestamp>
        <Textarea 
            placeholder={"Add a comment..."} 
            value={newComment.value}
            onKeyPress={onKeyPress}
            onChange={newComment.onChange}
            >
        </Textarea>
    </Meta>
  </Post>
);