#!/bin/bash

//docker build --rm . --tag huangyanyan/todo-list-redux:${VER:?invalid version}

docker push huangyanyan/todo-list-redux:${VER:?invalid version}