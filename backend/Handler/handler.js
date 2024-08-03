const User = require("./../db/user");
const SignUser = require("./../db/signUp");
const Product = require("./../db/addProduct");


//Contact us
async function addUser(userModel) {
    let user = new User({
        ...userModel
    });
    await user.save();
    return user.toObject();
}

async function getUsers() {
    const users = await User.find();
    return users.map(x => x.toObject());
}

//Sign-Up
async function SignupUser(userModel) {
    let existingUser = await SignUser.findOne({ email: userModel.email });
    if (existingUser) {
        throw new Error('User already exists');
    }
    let user = new SignUser({
        ...userModel
    });
    await user.save();
    return user.toObject();
}

async function getSignUsers() {
    const users = await SignUser.find();
    return users.map(x => x.toObject());
}

//Login
async function login(userModel) {
    console.log('Login Request:', userModel);
    let user = await SignUser.findOne({ email: userModel.email, pass: userModel.pass });
    console.log(user);
    if (!user) {
        throw new Error('Invalid email or password');
    }
    return user.toObject();
}

// Add-products
async function addProduct(productData)
{
    let user = new Product({
        ...productData
    });
    await user.save();
    return user.toObject();
}

async function getProducts() {
    const users = await Product.find();
    return users.map(x => x.toObject());
}

async function deleteProduct(id) {
    return Product.deleteOne({ _id: id });
}


// Update Product
async function updateProduct(id, updateData) {
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData);
    if (!updatedProduct) {
        throw new Error('Product not found');
    }
    return updatedProduct.toObject();
}

module.exports = { addUser, getUsers, SignupUser, getSignUsers, login, addProduct, getProducts, deleteProduct, updateProduct };
