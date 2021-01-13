const mongoose = require("mongoose");
const ProfilePic = require("../models/profilepic");
const Pastries = require("../models/pastries");
// const { default: Status } = require("../client/src/components/Forms/Status");
const StatusUpdate = require("../models/status");
const Description = require("../models/description");

module.exports = (app) => {

  app.get(`/api/status`, async (req, res) => {
    let status = await StatusUpdate.find();
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
    let products = await ProfilePic.find();
    return res.status(200).send(products);
  });

  app.post(`/api/product`, async ({ body }, res) => {

    let product = await ProfilePic.create(body);
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
