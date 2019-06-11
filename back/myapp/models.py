from django.db import models

# Create your models here.
from django.db import models 
class Parent(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=100,unique=True)
    password=models.CharField(max_length=100)
    created_at=models.DateTimeField(auto_now_add=True)

class Media(models.Model):
    img_url=models.CharField(max_length=500)
    role=models.CharField(max_length=100)
    level=models.CharField(max_length=100)

class Child(models.Model):
    parent_id = models.ForeignKey(Parent,on_delete=models.CASCADE)
    name=models.CharField(max_length=100)
    age=models.IntegerField(max_length=100)
    created_at=models.DateTimeField(auto_now_add=True)

class Achievements(models.Model):
   child_id= models.ForeignKey(Child,on_delete=models.CASCADE)
   language_letters_level=models.IntegerField(max_length=10)
   start_time=models.IntegerField(max_length=100)
   end_time=models.IntegerField(max_length=100)
   clicks=models.IntegerField(max_length=100)