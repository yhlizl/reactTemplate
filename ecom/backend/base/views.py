from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
def getRoutes(requset):
    return JsonResponse('Hello',safe=False)

@api_view(['GET'])
def getProducts(requset):
    return Response(products)

@api_view(['GET'])
def getProduct(requset,id):
    product = None
    for i in products:
        if i['_id']==id:
            product = i
            break
    return Response(product )