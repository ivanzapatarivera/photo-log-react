const mongoose = require("mongoose");
// const ProfilePic = require("../models/profilepic");
const Pastries = require("../models/pastries");
// const { default: Status } = require("../client/src/components/Forms/Status");
const StatusUpdate = require("../models/status");
const Description = require("../models/description");
const LoggedPhoto = require("../models/loggedphoto");
const LoggedProfilePicture = require("../models/loggedprofilepicture");

module.exports = (app) => {

  app.get(`/api/status`, async (req, res) => {
    let status = await StatusUpdate.find({}).sort({ timestamp: -1 });
    return res.status(200).send(status);
  });

  app.post(`/api/status`, async ({ body }, res) => {
    let status = await StatusUpdate.create(body);
    return (res) => {
      res.json().send({ status });
      console.log(res.json());
    };
  });

  app.get(`/api/description`, async (req, res) => {
    let description = await Description.find();
    return res.status(200).send(description);
  })

  app.post(`/api/description`, async ({ body }, res) => {
    let description = await Description.create(body);
    return (res) => {
      res.json().send({ description });
      console.log(res.json());
    };
  });

  app.post(`/api/loggedphoto`, async ({ body }, res) => {
    let loggedphoto = await LoggedPhoto.create(body);
    return (res) => {
      res.json().send({ loggedphoto });
      console.log(res.json());
    }
  });

  app.get(`/api/loggedphoto`, async (req, res) => {
    let loggedphoto = await LoggedPhoto.find();
    return res.status(200).send(loggedphoto);
  })

  app.post(`/api/loggedprofilepicture`, async ({ body }, res) => {
    let loggedprofilepicture = await LoggedProfilePicture.create(body);
    return (res) => {
      res.json().send({ loggedprofilepicture });
      console.log(res.json());
    }
  });

  app.get(`/api/loggedprofilepicture`, async (req, res) => {
    let loggedprofilepicture = await LoggedProfilePicture.find();
    return res.status(200).send(loggedprofilepicture);
  })
  

  app.get(`/api/pastries`, async (req, res) => {
    let pastries = await Pastries.find();
    return res.status(200).send(pastries);
  });

  app.post(`/api/pastries`, async ({ body }, res) => {
    let pastries = await Pastries.create(body);
    return (res) => {
      res.json().send({ pastries });
      console.log(res.json());
    };
  });

  app.get(`/api/product`, async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
  });

  app.post(`/api/product`, async ({ body }, res) => {

    let product = await Product.create(body);
    return (res) => res.json().send({ product });
  });

  app.put(`/api/product/:id`, async (req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product,
    });
  });

  app.delete(`/api/product/:id`, async (req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product,
    });
  });
};
