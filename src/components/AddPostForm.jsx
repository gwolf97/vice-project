import React from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"

import { postAdded } from "../slices/postSlice"

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onDescriptionChanged = (e) => setDescription(e.target.value)

    const onSavePostClicked = () => {
        if (title && description) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    description
                })
            )

            setTitle("")
            setDescription("")
        }
    }

  return (
    <section>
        <h2>Add a new post</h2>
        <form>
            <label html="postTitle">Post Title:</label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}>
            </input>
            <label html="postDescription">Description:</label>
            <input
                type="text"
                id="postDescription"
                name="postDescription"
                value={description}
                onChange={onDescriptionChanged}>
            </input>
            <button type="button" onClick={onSavePostClicked}>Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm