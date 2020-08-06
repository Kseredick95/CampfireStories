import React from 'react';
import Container from "../components/StoryPage/Container/Container"
import isLoggedIn from "./authenticate"

function RenderStoryPage() {
  if (isLoggedIn()) {
    return <Redirect to="/login" />
  }

  return (
    < Container />
  );
}

export default RenderStoryPage;
