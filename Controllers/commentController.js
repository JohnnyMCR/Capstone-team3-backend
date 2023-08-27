const express = require('express');
const comments = express.Router();
const {
    getAllComments,
    getAComment,
    createComment,
    deleteComment,
    updateComment
} = require('../queries/comments');



comments.get("/", async (req, res) => {
    const allComments = await getAllComments();
    if (allComments) {
        return res.status(202).json(allComments);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

comments.get("/:id", async (req, res) => {
    const {id} = req.params
    const aComment = await getAComment(id);
    if (aComment) {
        return res.status(202).json(aComment);
    } else {
        res.status(500).json({error: "Server Error"})
    };
});

comments.post("/", async (req, res) => {
    const newComment = req.body;
    try {
        const createdComment = await createComment(newComment)
        res.status(200).json(createdComment);
    } catch (error) {
        res.status(400).json({error: error});  
    };
});

comments.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const deletedComment = await deleteComment(id);
        res.status(200).json(deletedComment);
    } catch (error) {
        res.status(400).json({error: error});
    };
});
comments.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const updatedComment = await updateComment(id, body);
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json({error: error})    
    };
});

module.exports = comments;