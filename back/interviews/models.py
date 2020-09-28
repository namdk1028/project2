from django.db import models
from django.conf import settings

# Create your models here.


class Interview(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, default="GUEST")


class Question(models.Model):
    question = models.CharField(max_length=200)
    interviews = models.ManyToManyField(Interview)
