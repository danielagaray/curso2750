var express=require('express');
var app=express();

var db=require('./models');
app.set('views','./views');
app.set('view engine','ejs');

app.listen(3000,function(){
	db.sequelize.sync();
});

var cliente=db.Cliente;
var direccion=db.Direccion;
var libro=db.Libro;
var vendedor=db.Vendedor;
var venta=db.Venta;//solo implementar creacion y borrado

app.post('/clientes',function(req,res){
	cliente.create({
		nombre: req.body.nombre,
		apellido:req.body.apellido,
		email:req.body.email,
	})
	  .then(function(cliente){
	  	res.json(cliente);
	  });
});

app.get('/clientes',function(req,res){
	cliente.findAll()
	 .then(function(clientes){
	 	res.json(clientes);
	 });
});

app.get('/cliente/:clienteId',function(req,res){
	cliente.findOne({
		id:req.params.clienteId 
	})
	 .then(function(cliente){
	 	res.json(cliente);
	 });
});

app.put('/cliente/:clienteId',function(req,res){
	cliente.findOne({
		id:req.params.clienteId
	})
		.then(function(cliente){
			cliente.updateAttributes({
				
			})
		})
})

app.delete('/cliente/:clienteId', function(req,res){
	cliente.destroy({
		where: {id:req.params.clienteId}
	})
})






