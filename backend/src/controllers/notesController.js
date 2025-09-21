import Note from '../models/Note.js'

export async function getAllNotes(req, res){
    try {
        const notes = await Note.find().sort({createdAt: -1}) //-1 for descending order
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error in getAllNotes controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getNoteById(req, res){
    try{
        const id = req.params.id;
        const note = await Note.findById(id);
        if(!note) {
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json(note);
    } catch(error){
        console.log("Error in getNoteById controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function CreateNote(req,res){
    try {
        const {title, content} = req.body;
        const note = new Note({title,content});

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.log("Error in CreateNote controller",  error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateNote(req,res){
    try {
        const id = req.params.id;
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(id,{title, content},{new: true}); //new:true-> return updated object

        if(!updateNote) return res.status(404).json({message: "Note not found"});

        res.status(200).json(updatedNote);

    } catch (error) {
        console.log("Error in updateNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteNote(req,res){
    try {
        const id = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(id);
        if(!deletedNote) return res.status(404).json({message: "Note not found"});

        res.status(200).json(deletedNote);

    } catch (error) {
        console.log("Error in deleteNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}