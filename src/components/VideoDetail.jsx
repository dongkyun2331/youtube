import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Button, Card } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const [showVideos, setShowVideos] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );

    const fetchComments = async () => {
      const response = await fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`);
      setComments(response.items);
    };
    fetchComments();
  }, [id]);

  if (!videoDetail?.snippet)
    // 로딩 인디케이터를 렌더링하거나 여기서 null을 반환할 수 있습니다.
    return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Button onClick={() => { setShowVideos(true); setShowComments(false); }}>
          Show Videos
        </Button>
        <Button onClick={() => { setShowVideos(false); setShowComments(true); }}>
          Show Video Comments
        </Button>
        {showVideos && <Videos videos={videos} direction="column" />}
        {showComments && (
          <Card sx={{ backgroundColor: "#000" }}>
         <Box sx={{width: { xs: "100%", sm: "358px", md: "320px" }}}>
            {comments.map((comment) => (
              <Box key={comment.id}>
                {/* 댓글을 표시하는 UI */}
                <Typography sx={{  color: "#fff" }}>{comment.snippet.topLevelComment.snippet.textDisplay}</Typography>
              </Box>
            ))}
          </Box>
          </Card>
        )}
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
