from django.contrib import admin

from web import models

admin.site.register(models.Batch)
admin.site.register(models.Beekeeper)
admin.site.register(models.Forest)
admin.site.register(models.Honey)
admin.site.register(models.BatchMember)
