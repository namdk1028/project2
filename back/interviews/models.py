from django.db import models
from django.conf import settings

# Create your models here.


class Interview(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, default="GUEST")


class Category(models.Model):
    category = models.CharField(max_length=50)


class Question(models.Model):
    question = models.CharField(max_length=200)
    question_category = models.ForeignKey(Category, on_delete=models.CASCADE)
    time = models.IntegerField()
    # interviews = models.ManyToManyField(Interview)
