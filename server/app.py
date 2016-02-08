import os
# from flask.ext.sqlalchemy import SQLAlchemy
from logging import StreamHandler
from sys import stdout
from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash, json

import types


# db = SQLAlchemy()

def create_app():
    from api.kittens import kittens_api
    from views.index import index_view

    app = Flask(__name__, static_url_path='')
    # app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']


    ##############
    # API routes #
    ##############
    @app.route('/api/sendCommand', methods=['POST'])
    def sendCommand():

        # read the posted values from the UI
        display = request.json['display']
        command = request.json['command']
        return json.dumps({ "display" : display, "command" : command})
    #
    ##############
    #
        

    app.register_blueprint(kittens_api.blueprint, url_prefix='/api')
    app.register_blueprint(index_view)

    # db.init_app(app)

    handler = StreamHandler(stdout)
    app.logger.addHandler(handler)
    return app
