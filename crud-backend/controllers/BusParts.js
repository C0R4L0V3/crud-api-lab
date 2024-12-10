// placeholder name for now changed once DB determined
const BusPart = require('../models/BusPart.js');
const express = require('express');
const router = express.Router();

//Routes here

//CREATE - post - /BusParts.js
router.post('/', async (req, res) => {
     try {
        const createPart = await BusPart.create(req.body)
        res.status(201).json(createPart)
     } catch (error) {
        res.status(500).json({ error: error.message})
     } 
})

//READ - get - /BusParts.js
router.get('/', async (req, res) => {
   try {
      const findParts = await BusPart.find();
         res.status(200).json(findParts);
   } catch (error) {
      res.status(500).json({ error: error.message })   
   }
})

//READshow - get - /BusParts.js
router.get('/:partId', async (req, res) => {
   try {
      const showPart = await BusPart.findById(req.params.partId)
      if (!showPart) {
         res.status(404);
         throw new Error('Part not found.')
      }
      res.status(200).json(showPart)
   } catch (error) {
      if (res.statusCode === 404) {
         res.json({ error: error.message})
      } else {
      res.status(500).json({ error: error.message})
      }
   }
})
//put and patch - can use the same code
//UPDATE - patch - /BusParts.js  // maybe i can use this same code to the patch?
router.patch('/:partId', async (req, res) => {
   try {
      const updatePart = await BusPart.findByIdAndUpdate(
         req.params.partId,
         req.body,
         {new: true}
      );
      if (!updatePart) {
         res.status(404);
         throw new Error('Part not found')
      }
      res.status(200).json(updatePart)
   } catch (error) {
      if (res.statusCode === 404) {
         res.json({ error: error.message })
      } else {
      res.status(500).json({ error: error.message})
      }
   }
})


// DELETE - delete - /BusParts.js
router.delete('/:partId', async (req, res) => {
   try {
      const deletePart = await BusPart.findByIdAndDelete(req.params.partId)
      if (!deletePart) {
         res.status(404)
         throw new Error('Part not Found.');
      }
      res.status(200).json(deletePart)
   } catch (error) {
      if (res.statusCode === 404) {
         res.json({ error: error.message })
      } else {
      res.status(500).json({ error: error.message})
      }
   }
})

//export routes to server.js
module.exports = router;