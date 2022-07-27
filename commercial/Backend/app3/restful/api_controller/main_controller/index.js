// conteroller file

class main_grid_controller {

    get_main_grid(req,res) {
        res.get()
   
    }

    add_main_grid(req,res) {
        res.post()
    
    }

    update_main_grid(req,res) {
        res.pull()
    }

    delete_main_grid(req,res) {
        res.delete()

    }
}

class product_data_controller {

    get_product_data(req,res) {
        res.get()
   
    }

    add_product_data(req,res) {
        res.post()
    
    }

    update_product_data(req,res) {
        res.pull()

    }

    delete_product_data(req,res) {

    }
}

class second_grid_controller {

    get_second_grid(req,res) {
        res.get()
   
    }

    add_second_grid(req,res) {
        res.post()
    
    }

    update_second_grid(req,res) {
        res.pull()
    }

    delete_second_grid(req,res) {
        res.delete()

    }
}

module.exports = {
    main_grid_controller: new main_grid_controller,
    product_data_controller : new product_data_controller,
    second_grid_controller : new second_grid_controller
}